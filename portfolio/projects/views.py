from django.http import JsonResponse
from kubernetes import client, config

def k8s_status(request):
    try:
        # Load the Kubernetes configuration from ~/.kube/config
        config.load_kube_config(config_file="~/Documents/project-kubernetes/portfolio-website/portfolio/kubeconfig.conf")

        # Create API client
        v1 = client.CoreV1Api()
        pods = v1.list_pod_for_all_namespaces(watch=False)

        # Extract pod names and namespaces
        pod_info = [{"namespace": pod.metadata.namespace, "name": pod.metadata.name} for pod in pods.items]

        return JsonResponse({"pods": pod_info})

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
