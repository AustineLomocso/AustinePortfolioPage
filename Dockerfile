FROM ubuntu:latest
LABEL authors="austi"

ENTRYPOINT ["top", "-b"]

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
# Note: Ensure the JAR name matches what is generated in your target folder
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]