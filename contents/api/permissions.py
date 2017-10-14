from rest_framework import permissions


class IsAuthorOfContent(permissions.BasePermission):
    def has_object_permission(self, request, view, content):
        if request.user:
            return content.author == request.user
            # return content.id == request.user.id
        return False