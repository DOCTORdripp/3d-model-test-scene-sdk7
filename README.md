# 3D Model Spawner Test Scene

## Description

A simple 4x4 SDK7 scene designed for batch testing 3D assets in Decentraland

<img src="/images/scene-thumbnail.png">

## Instructions

Use this file to quick place items in a fresh SDK7 environment. By default, there are 11 items loaded onto this 4x4 space. Copy up to 11 models into /models folder and rename 1.glb through 11.glb for easy batch testing.

## How does it work?

Spawn items with one line of code and 3 different options:

**WORLD CENTER**

Spawn a static model from world center with 

```classSpawner('models/1.glb');```

**CUSTOM POSITION**

Spawn a model with custom positioning with 

```elementSpawner('models/1.glb', Vector3.create(8, 0, 8));```

**CUSTOM POSITION, SCALE & ROTATION**

Spawn a model with custom positioning, scale, and rotation with 

```customSpawner('models/1.glb', Vector3.create(1, 2, 2), Vector3.create(2, 2, 2), Quaternion.fromEulerDegrees(180, 0, 0));```

## Try it out

**Previewing the scene**

1. Download this scene repository

2. Install the [Decentraland Editor](https://docs.decentraland.org/creator/development-guide/sdk7/editor/)

3. Open a Visual Studio Code window on this scene's root folder.

4. Open the Decentraland Editor tab, and press **Run Scene**

Alternatively, you can use the command line. Inside this scene root directory run:

```
npm run start
```
