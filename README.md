# kubernetes notes

## Benefits of Kubernetes
- when a pod is created, k8s schedules it automatically on the worker node with the least utilization
  - this happens automatically
- health checks are a given
## Services
- pod IPs change all the time
- services allow you to group pods together and makes it so the service IP doesnt change
  - the service endpoint can be exposed to the outer world and isn't just limited to internal cluster
  - it defaults to internal only, but can be overridden
  - `kubectl expose` will expose a deployment to the outer world (again by default its only internal to cluster)
    - `kubectl expose deployment first-app --port=8080 --type=LoadBalancer`
      - available `type`s:
        - `ClusterIP` will give you an IP only reachable from inside the cluster but it won't change
          - one of these will always be created automatically every time by kubernetes
        - `NodePort` will give you an IP that won't change AND is accessible from outside the cluster
        - `LoadBalancer` will allow you to use a load balancer (which must be setup separately) and will distribute traffic across traffic to ALL pods across the service (good for scaling
        - `kubectl get services` - will show you the load balancer it creates automatically
- a kubernetes deployment means that it will automatically restart the pod if it crashes
## Scaling
- `kubectl scale deployment/first-app --replicas=3` - **manually** scales a deployment
  - a `replica` is simply an instance of a pod / container. 3 replicas mean that the same pod is running 3 times.
  - because we have a load balancer, even if one of the pods crashes and is in `Error` state, traffic will only go to the healthy pod!
  - 