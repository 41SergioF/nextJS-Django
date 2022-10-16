from ctypes import resize
from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Aula, Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'
 
        
class CadastrarAulaSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(max_length=250)

    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError('deve ter pelo menos três caracteres')
        return value

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
        
        