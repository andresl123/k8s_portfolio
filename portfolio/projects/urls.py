from django.urls import path
from .views import k8s_status

urlpatterns = [
    path('api/k8s/', k8s_status, name='k8s_status'),
]
