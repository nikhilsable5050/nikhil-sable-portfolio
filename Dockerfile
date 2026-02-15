FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

# Give execute permission
RUN chmod +x mvnw

# Build app
RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/*.jar"]
