import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Управление сотрудниками - добавление, получение списка
    Args: event с httpMethod, body, queryStringParameters
          context с request_id
    Returns: HTTP response с данными сотрудников
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    try:
        conn = psycopg2.connect(database_url)
        cur = conn.cursor()
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Database connection failed: {str(e)}'}),
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        cur.execute('''
            SELECT id, full_name, email, department, position, 
                   hire_date, employment_status, created_at
            FROM employees 
            ORDER BY created_at DESC
        ''')
        
        columns = [desc[0] for desc in cur.description]
        rows = cur.fetchall()
        
        employees = []
        for row in rows:
            employee = {}
            for i, col in enumerate(columns):
                value = row[i]
                if hasattr(value, 'isoformat'):
                    value = value.isoformat()
                employee[col] = value
            employees.append(employee)
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'employees': employees}),
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            
            full_name = body_data.get('full_name')
            email = body_data.get('email')
            department = body_data.get('department')
            position = body_data.get('position')
            hire_date = body_data.get('hire_date')
            employment_status = body_data.get('employment_status', 'active')
            
            cur.execute('''
                INSERT INTO employees (full_name, email, department, position, hire_date, employment_status)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id, full_name, email, department, position, hire_date, employment_status
            ''', (full_name, email, department, position, hire_date, employment_status))
            
            conn.commit()
            
            result = cur.fetchone()
            columns = [desc[0] for desc in cur.description]
            
            employee = {}
            for i, col in enumerate(columns):
                value = result[i]
                if hasattr(value, 'isoformat'):
                    value = value.isoformat()
                employee[col] = value
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'employee': employee}),
                'isBase64Encoded': False
            }
        except Exception as e:
            if conn:
                conn.rollback()
                conn.close()
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': f'Failed to create employee: {str(e)}'}),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }