from django.shortcuts import get_object_or_404
from predios.serializers import ProductorSerializer, PredioSerializer, PropietarioSerializer, CultivoSerializer
from predios.models import Productor, Predio, Propietario, Cultivo, UserProfile
from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms.models import model_to_dict


class Pagination(PageNumberPagination):
    page_size = 100

    def get_paginated_response(self, data):
        return Response({
            'links': {
               'next': self.get_next_link(),
               'previous': self.get_previous_link()
            },
            'total_pages': self.page.paginator.num_pages,
            'count': self.page.paginator.count,
            'results': data
        })

class ProductorViewSet(viewsets.ModelViewSet):
    queryset = Productor.objects.all()
    serializer_class = ProductorSerializer
    pagination_class = Pagination
    # filter_class = ProductorFilter

    def get_queryset(self):
        nombre = self.request.GET.get('nombre')
        curp = self.request.GET.get('curp')
        user = self.request.user
        tipo = user.profile.tipo
        qs = Predio.objects.all().exclude(productor__curp='')
        if tipo=='ddr':
            qs = qs.filter(ddr = user.profile.ddr)
        if tipo == 'cader':
            qs = qs.filter(cader = user.profile.cader)
        p_qs = qs.values_list('productor__curp', flat=True)
        f_qs = self.queryset.filter(curp__in=p_qs)
        if nombre:
            f_qs = f_qs.filter(nombre__icontains=nombre)
        if curp:
            f_qs = f_qs.filter(curp__icontains=curp)
        return f_qs 

class PropietarioViewSet(viewsets.ModelViewSet):
    queryset = Propietario.objects.all()
    serializer_class = PropietarioSerializer
    pagination_class = Pagination
    
class PredioViewSet(viewsets.ModelViewSet):
    queryset = Predio.objects.all()
    serializer_class = PredioSerializer
    pagination_class = Pagination
    filter_fields=('productor',)

class CultivoViewSet(viewsets.ModelViewSet):
    queryset = Cultivo.objects.all()
    serializer_class = CultivoSerializer
    pagination_class = Pagination
    filter_fields=('predio','ciclo',)

class getUserProfile(APIView):
    def post(self, request, format=None):
        user = request.user
        profile = model_to_dict(user.profile)
        jc = profile['jefe_cader']
        jefe_cader = ''
        if(jc):
            jefe_cader = profile['nombre']
        else:
            pfle = UserProfile.objects.get(ddr=profile['ddr'], cader=profile['cader'], jefe_cader=True )
            profile['jefe_cader']=pfle.nombre
        return Response(profile)
