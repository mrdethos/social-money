# Generated by Django 4.1.1 on 2023-02-06 14:20

from django.db import migrations, models
import django_cryptography.fields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=django_cryptography.fields.encrypt(models.CharField(max_length=50)),
        ),
    ]
