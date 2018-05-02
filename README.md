# Proto PhaserJS 3

Playing with PhaserJS 3.

# Development

## Run the dev image

Run to mount local project code inside the container and bind ports
```
docker run --name phaser3 --rm -v "$PWD":/usr/src/app -p 8080:8080 -d nidup/phaser:latest
```

Your container should appears in the list when typing,
```
docker ps
```

## Install / update project dependencies

```
docker exec -it phaser3 npm install
```

## Running the project in dev mode:

Launch webpack server in watch mode,
```
docker exec -it phaser3 npm run dev
```

You can access your project in your browser,
```
http://localhost:8080/
```

# Deployment

## Build the bundle.js

```
docker exec -it phaser3 npm run build
```

## Commit then push the bundle.js

```
git add build/bundle.js
git commit
git push
```

# Licenses

MIT for the code of this repository (src folder).

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) for the artwork (assets folder).
