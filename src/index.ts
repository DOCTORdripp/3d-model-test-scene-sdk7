import { Quaternion, Vector3 } from '@dcl/sdk/math';
import { classSpawner, elementSpawner, customSpawner } from './class';

export function main() {

    // STATIC ENTITIES



    //custom positions
    elementSpawner('models/1.glb', Vector3.create(8, 0, 8));
    elementSpawner('models/2.glb', Vector3.create(24, 0, 8));
    elementSpawner('models/3.glb', Vector3.create(40, 0, 8));
    elementSpawner('models/4.glb', Vector3.create(56, 0, 8));

    elementSpawner('models/5.glb', Vector3.create(8, 0, 24));
    elementSpawner('models/6.glb', Vector3.create(24, 0, 24));
    elementSpawner('models/7.glb', Vector3.create(40, 0, 24));
    elementSpawner('models/8.glb', Vector3.create(56, 0, 24));

    elementSpawner('models/9.glb', Vector3.create(16, 0, 48));
    elementSpawner('models/10.glb', Vector3.create(32, 0, 48));
    elementSpawner('models/11.glb', Vector3.create(48, 0, 48));

    //custom position, scale and rotation
    //customSpawner('models/1.glb', Vector3.create(1, 2, 2), Vector3.create(2, 2, 2), Quaternion.fromEulerDegrees(180, 0, 0));

    //world center
    //classSpawner('models/1.glb');

}