from django.conf.urls import url, include
from predios import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'productores', views.ProductorViewSet)
router.register(r'propietarios', views.PropietarioViewSet)
router.register(r'predios', views.PredioViewSet)
router.register(r'cultivos', views.CultivoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^get_user_profile/$', views.getUserProfile.as_view()),
    url(r'^rest-auth/', include('rest_auth.urls')),
]
