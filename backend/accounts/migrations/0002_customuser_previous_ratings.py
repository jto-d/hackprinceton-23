# Generated by Django 4.1.7 on 2023-04-02 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='previous_ratings',
            field=models.JSONField(blank=True, default=[], verbose_name='Form rating'),
        ),
    ]
