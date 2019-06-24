workflow "next diff" {
  resolves = "nextdiff"
  on = "deployment_status"
}

action "nextdiff" {
  uses = "lucleray/nextdiff@master"
  secrets = ["GITHUB_TOKEN","ZEIT_TOKEN"]
}
