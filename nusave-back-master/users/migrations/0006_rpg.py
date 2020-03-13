from django.db import migrations
import json
from data.data_API import DataAPI

def create_data(apps, schema_editor):
    User = apps.get_model('users', 'RPGNuUser')
    db_alias = schema_editor.connection.alias


    dat = DataAPI()
    for i in range(100):
        print(i)
        dat.readInstructions(json.dumps({
                    "ID": i+1,
                    "feature": 'RPG',
                    "request": 'update'
                }))
        user_data = dat.readInstructions(json.dumps({
                    "ID": i+1,
                    "feature": 'RPG',
                    "request": 'summary'
                }))
        user = User(user_summary = user_data)

        user.save()

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_rpgnuuser'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
