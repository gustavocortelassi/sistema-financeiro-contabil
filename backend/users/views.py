from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer

class CurrentUserView(generics.RetrieveAPIView):
    """
    Uma view para retornar os dados do usuário atualmente autenticado.
    """
    serializer_class = UserSerializer

    # 1. Permissão: Só permite acesso se o usuário ESTIVER LOGADO
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # 2. Retorna o próprio usuário que fez a requisição
        return self.request.user