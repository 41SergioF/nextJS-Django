from django.contrib import admin
from django.urls import path, include

from teacher.views import CadastrarAulaAPIView, TeacherAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('teachers/', TeacherAPIView.as_view()),
    path('teachers/<int:id>/aulas', CadastrarAulaAPIView.as_view()),
]
