from django.http import HttpResponse
from .models import Post
from django.utils import timezone
from django.shortcuts import render,get_object_or_404

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    context = {'posts': posts}
    return render(request, 'blog/post_list.html',context)

def post_detail(request, pk):
     return render(request,'blog/post_detail.html')

def post_edit(request, pk):
     return render(request,'blog/post_edit.html')

def post_new(request):
     return render(request,'blog/post_new.html')


