FROM python:3.11-slim

# Directorio de trabajo
WORKDIR /app

#  requirements.txt para aprovechar caché
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

#  código de la aplicación
COPY app.py .

# Variable de entorno para el puerto
ENV PORT=5000

# Exponer puerto 5000
EXPOSE 5000

# Crear usuario no-root y usarlo
RUN useradd -ms /bin/bash appuser
USER appuser

# Comando para iniciar la aplicación
CMD ["python", "app.py"]
