#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.
# Expected contenxt: ../../
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY ["BaGet/BaGet.csproj", "BaGet/"]
COPY ["BaGet.Core/BaGet.Core.csproj", "BaGet.Core/"]
COPY ["BaGet.Protocol/BaGet.Protocol.csproj", "BaGet.Protocol/"]
COPY ["BaGet.Database.Sqlite/BaGet.Database.Sqlite.csproj", "BaGet.Database.Sqlite/"]
COPY ["BaGet.Database.SqlServer/BaGet.Database.SqlServer.csproj", "BaGet.Database.SqlServer/"]
COPY ["BaGet.Aliyun/BaGet.Aliyun.csproj", "BaGet.Aliyun/"]
COPY ["BaGet.Database.PostgreSql/BaGet.Database.PostgreSql.csproj", "BaGet.Database.PostgreSql/"]
COPY ["BaGet.Gcp/BaGet.Gcp.csproj", "BaGet.Gcp/"]
COPY ["BaGet.Database.MySql/BaGet.Database.MySql.csproj", "BaGet.Database.MySql/"]
COPY ["BaGet.Aws/BaGet.Aws.csproj", "BaGet.Aws/"]
COPY ["BaGet.Azure/BaGet.Azure.csproj", "BaGet.Azure/"]
COPY ["BaGet.Hosting/BaGet.Hosting.csproj", "BaGet.Hosting/"]
RUN dotnet restore "BaGet/BaGet.csproj"
COPY . .
WORKDIR "/src/BaGet"
RUN dotnet build "BaGet.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BaGet.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BaGet.dll"]
