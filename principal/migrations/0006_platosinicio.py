# Generated by Django 4.2.4 on 2023-09-02 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('principal', '0005_alter_platos_imagen'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlatosInicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=250)),
                ('imagen', models.ImageField(null='True', upload_to='platos')),
            ],
        ),
    ]
