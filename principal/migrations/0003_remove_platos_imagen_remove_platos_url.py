# Generated by Django 4.2.4 on 2023-08-27 23:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('principal', '0002_rename_project_platos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='platos',
            name='imagen',
        ),
        migrations.RemoveField(
            model_name='platos',
            name='url',
        ),
    ]
