# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Ddr(models.Model):
    estado_id = models.IntegerField(null=True, blank=True)
    numero = models.IntegerField(null=True, blank=True)
    nombre = models.TextField(blank=True)

    def __str__(self):
        return "%s - %s"%(self.numero, self.nombre)

    class Meta:
        db_table = 'ddr'

class Cader(models.Model):
    ddr_id = models.IntegerField(null=True, blank=True)
    numero = models.IntegerField(null=True, blank=True)
    nombre = models.TextField(blank=True)

    def __str__(self):
        return "%s - %s"%(self.numero, self.nombre)

    class Meta:
        db_table = 'cader'

class Municipio(models.Model):
    cader_id = models.IntegerField(null=True, blank=True)
    numero = models.IntegerField(null=True, blank=True)
    nombre = models.TextField(blank=True)

    def __str__(self):
        return "%s - %s"%(self.numero, self.nombre)

    class Meta:
        db_table = 'municipio'

class Ejido(models.Model):
    municipio_id = models.IntegerField(null=True, blank=True)
    numero = models.IntegerField(null=True, blank=True)
    nombre = models.TextField(blank=True)

    def __str__(self):
        return "%s - %s"%(self.numero, self.nombre)

    class Meta:
        db_table = 'ejido'

class Productor(models.Model):
    curp = models.CharField(max_length=100)
    rfc = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    persona_fisica = models.BooleanField(default=True)
    registro_padron = models.BooleanField()
    id_suri=models.CharField(max_length=30)
    
    class Meta:
        verbose_name = 'Productores'
        db_table = 'productores'


    
class Predio(models.Model):
    ddr = models.ForeignKey(Ddr, on_delete=models.CASCADE)
    cader = models.ForeignKey(Cader, on_delete=models.CASCADE)
    municipio = models.ForeignKey(Municipio, on_delete=models.CASCADE)
    ejido = models.ForeignKey(Ejido, on_delete=models.CASCADE)
    id_unico = models.BigIntegerField()
    folio_predio = models.CharField(max_length=100)
    productor = models.ForeignKey(Productor, on_delete=models.CASCADE)
    superficie_total = models.FloatField()
    superficie_elegible = models.FloatField()

    class Meta:
        db_table = 'predios'

class Ciclo(models.Model):
    nombre = models.CharField(max_length=100)
    nombre_comun = models.CharField(max_length=100)

    class Meta:
        db_table = 'ciclos'
    
    
class Propietario(models.Model):
    curp = models.CharField(max_length=100)
    rfc = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    persona_fisica = models.BooleanField(default=True)
    exede_limite_propiedad = models.BooleanField(default=False)
    ciclo = models.ForeignKey(Ciclo)
    predio = models.ForeignKey(Predio)
    
    class Meta:
        verbose_name = 'propietarios'
        db_table = 'propietarios'

class Cultivo(models.Model):
    predio = models.ForeignKey(Predio, related_name='cultivos')
    nombre = models.CharField(max_length=100)
    nombre_generico = models.CharField(max_length=100)
    variedad = models.CharField(max_length=100) 
    superficie = models.FloatField() 
    rendimiento = models.FloatField(blank=True, null=True)
    ciclo = models.CharField(max_length=10)
    creacion = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    modificacion = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        verbose_name = 'cultivos'
        db_table = 'cultivos'

