# Generated by Django 4.2.3 on 2023-07-13 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone_number', models.IntegerField()),
                ('event_type', models.CharField(blank=True, choices=[(1, '개인 행사'), (2, '기업 행사'), (3, '지역 행사'), (4, '홍보 행사'), (5, '강연/간담회'), (6, '기타')], max_length=200, null=True)),
                ('event_place', models.CharField(blank=True, choices=[(1, '호텔'), (2, '이벤트/컨벤션홀'), (3, '주거 공간'), (4, '사내 공간'), (5, '기타 실내'), (6, '기타 야외'), (7, '미정'), (8, '기타')], max_length=200, null=True)),
                ('people_count', models.CharField(blank=True, choices=[(1, '30명 미만'), (2, '50명 미만'), (3, '100명 미만'), (4, '200명 미만'), (5, '300명 미만'), (6, '400명 미만'), (7, '기타')], max_length=200, null=True)),
                ('event_duration', models.CharField(blank=True, choices=[(1, '1시간'), (2, '2시간'), (3, '3시간'), (4, '4시간'), (5, '5시간'), (6, '하루 이상'), (7, '기타')], max_length=200, null=True)),
                ('event_date', models.DateTimeField(blank=True, null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('date_registered', models.DateTimeField(auto_now_add=True)),
                ('ticket_number', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]