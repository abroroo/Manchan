# Generated by Django 4.1.2 on 2023-05-17 22:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_merge_20230518_0655'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='drinks',
        ),
        migrations.DeleteModel(
            name='Drink',
        ),
        migrations.DeleteModel(
            name='DrinkCategory',
        ),
    ]
