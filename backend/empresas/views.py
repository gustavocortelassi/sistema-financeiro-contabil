from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Empresa
from .serializers import EmpresaSerializer

class EmpresaViewSet(viewsets.ModelViewSet):
    serializer_class = EmpresaSerializer

    # Protege o endpoint: só usuários logados podem acessar
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        usuario_logado = self.request.user

        return Empresa.objects.filter(usuarios=usuario_logado)

    def perform_create(self, serializer):
        empresa = serializer.save()
        empresa.usuarios.add(self.request.user)