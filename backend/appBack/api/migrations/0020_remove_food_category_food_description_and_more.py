# Generated by Django 4.1.2 on 2023-05-17 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_remove_menu_drinks_delete_drink_delete_drinkcategory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='food',
            name='category',
        ),
        migrations.AddField(
            model_name='food',
            name='description',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='food',
            name='image_location',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
