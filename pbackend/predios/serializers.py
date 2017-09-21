from rest_framework import serializers
from .models import Productor, Predio, Propietario, Cultivo

class CultivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivo
        fields = '__all__'

class ProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productor
        fields = '__all__'
        
class PropietarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propietario
        fields = '__all__'

class PredioSerializer(serializers.ModelSerializer):
    ddr = serializers.StringRelatedField()
    cader = serializers.StringRelatedField()
    municipio = serializers.StringRelatedField()
    ejido = serializers.StringRelatedField()

    class Meta:
        model = Predio
        fields = '__all__'
