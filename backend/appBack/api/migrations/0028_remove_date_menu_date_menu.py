# Generated by Django 4.1.2 on 2023-05-19 14:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_rename_foods_menu_custom_menu'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='date',
            name='menu',
        ),
        migrations.AddField(
            model_name='date',
            name='menu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.menu'),
        ),
    ]
