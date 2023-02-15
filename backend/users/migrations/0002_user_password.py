# Generated by Django 4.1.1 on 2023-02-06 14:06

from django.db import migrations, models
import django_cryptography.fields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=django_cryptography.fields.encrypt(models.CharField(default='aaa', max_length=50)),
        ),
    ]
