# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-08-09 20:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('predios', '0007_auto_20170809_1418'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ciclo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('nombre_comun', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'ciclos',
            },
        ),
    ]
