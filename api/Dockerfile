FROM ruby:2.7.1

RUN apt update -qq && apt install -y mariadb-client graphviz

WORKDIR /app_name
COPY Gemfile /app_name/Gemfile
COPY Gemfile.lock /app_name/Gemfile.lock
RUN bundle install
COPY . /app_name

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
