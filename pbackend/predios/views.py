from django.shortcuts import get_object_or_404
from predios.serializers import ProductorSerializer, PredioSerializer, PropietarioSerializer, CultivoSerializer
from predios.models import Productor, Predio, Propietario, Cultivo
from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets
from rest_framework.response import Response

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

    def get_queryset(self):
        print('username: ',self.request.user)
        return Productor.objects.all()

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

    # def get_queryset(self):
        # qs = Cultivo.objects.all()
        # if self.request.GET.get('ciclo'):
            # print('ciclo en url',self.request.GET.get('ciclo'))
            # qs = qs.filter(ciclo=self.request.GET.get('ciclo'))
        # if type(self.request.GET.getlist('predio'))== list:
            # return qs.filter(predio__in=self.request.GET.getlist('predio'))
        # return qs
