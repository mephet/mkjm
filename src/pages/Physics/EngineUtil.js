import Matter from 'matter-js';

const mEngine = props => {

    const Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World
        // Bodies = Matter.Bodies,
        // Mouse = Matter.Mouse,
        // MouseConstraint = Matter.MouseConstraint

    const engine = Engine.create({

    });

    

    const render = Render.create({
        element: props.sceneRef,
        engine: engine,
        options: {
            width: props.viewportWidth,
            height: 600,
            wireframes: false
        }
    });

    var stack = Matter.Composites.stack(props.viewportWidth / 2, 80, 26, 12, 0, 0, (x, y) => {
        return Matter.Bodies.circle(x, y, Matter.Common.random(5, 5), { restitution: 0.6, friction: 0.02, render: { fillStyle: Matter.Common.choose(['darkred', 'red', 'orange']) } });
    });
    World.add(engine.world, stack);

    var h1 = Matter.Bodies.rectangle(props.viewportWidth / 2 - 44, 120, 15, 100, { isStatic: true, render: { fillStyle: 'silver', visible: true } });
    World.add(engine.world, h1);

    var h3 = Matter.Bodies.rectangle(props.viewportWidth / 2 + 278, 120, 15, 100, { isStatic: true, render: { fillStyle: 'silver', visible: true } });
    World.add(engine.world, h3);

    const leftSlopeDown = Matter.Bodies.rectangle(props.viewportWidth / 2 + 30, 234, 15, 200, { isStatic: true, render: { fillStyle: 'silver', visible: true } });
    Matter.Body.rotate(leftSlopeDown, 40);
    World.add(engine.world, leftSlopeDown);


    const rightSlopeDown = Matter.Bodies.rectangle(props.viewportWidth / 2 + 210, 234, 15, 200, { isStatic: true, render: { fillStyle: 'silver', visible: true } });
    Matter.Body.rotate(rightSlopeDown, -150);
    World.add(engine.world, rightSlopeDown);

    const leftSlopeUp = Matter.Bodies.rectangle(props.viewportWidth / 2 + 30, 365, 15, 200, { isStatic: true, render: { visible: true } });
    Matter.Body.rotate(leftSlopeUp, -150);
    World.add(engine.world, leftSlopeUp);

    const rightSlopeUp = Matter.Bodies.rectangle(props.viewportWidth / 2 + 210, 370, 15, 200, { isStatic: true, render: { visible: true } });
    Matter.Body.rotate(rightSlopeUp, 150);
    World.add(engine.world, rightSlopeUp);

    var h9 = Matter.Bodies.rectangle(props.viewportWidth / 2 - 44, 480, 15, 100, { isStatic: true, render: { visible: true } });
    World.add(engine.world, h9);

    var h10 = Matter.Bodies.rectangle(props.viewportWidth / 2 + 278, 480, 15, 100, { isStatic: true, render: { visible: true } });
    World.add(engine.world, h10);

    var h11 = Matter.Bodies.rectangle(props.viewportWidth / 2 + 130, 530, 500, 15, { isStatic: true, render: { visible: true } });
    World.add(engine.world, h11);

    var h12 = Matter.Bodies.rectangle(props.viewportWidth / 2 + 130, 70, 500, 15, { isStatic: true, render: { fillStyle: 'silver', visible: true } });
    World.add(engine.world, h12);


    Engine.run(engine);

    Render.run(render);

    return engine;
}

// export const gravityFlip = (Engine) => {
//     World.gravity.y = World.gravity.y * -1;
// }

export default mEngine;