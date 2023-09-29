import { engine, GltfContainer, Transform, Entity } from '@dcl/sdk/ecs';
import { Quaternion, Vector3 } from '@dcl/sdk/math';

// Spawns a model string in the center of build static position
// ie: classSpawner('models/freshmint2.glb')
export function classSpawner(model: string): Entity {
    const spawnBuilding = engine.addEntity();
    GltfContainer.create(spawnBuilding, { src: model });
    Transform.create(spawnBuilding, {
        position: Vector3.create(8, 0, 8),
        rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    });

    return spawnBuilding;
}

// Spawns model with position for adding elements to a scene
// ie: elementSpawner('models/indicatorArrow_green.glb', Vector3.create(9, 1, 8))
export function elementSpawner(model: string, position: Vector3): Entity {
    const spawnElement = engine.addEntity();
    GltfContainer.create(spawnElement, { src: model });
    Transform.create(spawnElement, {
        position,
        rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    });

    return spawnElement;
}

// Spawns model with position, scale, and rotation for totally custom entity
// ie: customSpawner('models/indicatorArrow_green.glb', Vector3.create(3, 3, 3), Vector3.create(1, 1, 1), Quaternion.fromEulerDegrees(0, 180, 0))    
export function customSpawner(model: string, position: Vector3, scale: Vector3, rotation: Quaternion): Entity {
    const spawnEntity = engine.addEntity();
    GltfContainer.create(spawnEntity, { src: model });
    Transform.create(spawnEntity, {
        position,
        scale,
        rotation
    });

    return spawnEntity;
}