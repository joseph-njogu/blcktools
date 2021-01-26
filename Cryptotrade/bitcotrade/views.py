from django.shortcuts import render, redirect

from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response


# def index(request):
# 	return render(request, 'index.html')
@csrf_exempt
# post method
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=HTTP_200_OK)
    if user is not None:
    	login(request,user)
    	return redirect(dashboard)

def woodforest(request):
    return render(request, 'woodforest.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def invoice(request):
    return render(request, 'invoice.html')

def huntington(request):
    return render(request, 'huntington.html')

def barclays(request):
    return render(request, 'barclays.html')

def bbt(request):
    return render(request, 'bbt.html')

def bbva(request):
    return render(request, 'bbva.html')

def chase(request):
    return render(request, 'chase.html')

def citi(request):
    return render(request, 'citi.html')

def nfcu(request):
    return render(request, 'nfcu.html')

def pnc(request):
    return render(request, 'pnc.html')

def rbc(request):
    return render(request, 'rbc.html')

def scotia(request):
    return render(request, 'scotia.html')
