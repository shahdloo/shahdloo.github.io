FROM alpine:latest

LABEL "com.github.actions.name"="Send a dispatch to Gatsby site"
LABEL "com.github.actions.description"="Trigger action in Gatsby site via GitHub API"
LABEL "com.github.actions.icon"="activity"
LABEL "com.github.actions.color"="yellow"

RUN apk --update add --no-cache \
  jq \
  wget \
  bash \
  nodejs \
  nodejs-npm \
  git \
  openssh \
  curl

LABEL "repository"="http://github.com/shahdloo/shahdloo.github.io"
LABEL "homepage"="http://github.com/actions"
LABEL "maintainer"="Mo SH"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
