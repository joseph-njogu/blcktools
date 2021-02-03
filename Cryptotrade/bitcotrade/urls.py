from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('api/login', views.login, name='login'),
    path('', TemplateView.as_view(template_name ='index.html')),
    path('dashboard', views.dashboard, name='dashboard'),
    path('invoice', views.invoice, name='invoice'),
    path('huntington', views.huntington, name='huntington'),
    path('woodforest', views.woodforest, name='woodforest'),
    path('barclays', views.barclays, name='barclays'),
    path('citi', views.citi, name='citi'),
    path('bbt', views.bbt, name='bbt'),
    path('bbva', views.bbva, name='bbva'),
    path('chase', views.chase, name='chase'),
    path('nfcu', views.nfcu, name='nfcu'),
    path('rbc', views.rbc, name='rbc'),
    path('pnc', views.pnc, name='pnc'),
    path('scotia', views.scotia, name='scotia'),
    path('suntrust', views.suntrust, name='suntrust'),
    path('logout', views.logout, name='logout'),

]
if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 