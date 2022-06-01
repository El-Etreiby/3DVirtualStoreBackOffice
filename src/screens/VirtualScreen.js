
import {Canvas, useFrame, useLoader  } from 'react-three-fiber';
import {useRef, Suspense,  useEffect} from 'react';
import './VirtualScreen.css';
import Controls from '../components/Controls';
import * as THREE from 'three';

import {useSelector, useDispatch} from 'react-redux';


//actions
import {getProducts as listProducts} from '../redux/actions/productActions.js';


const Box = (props)=>{
  const ref = useRef();
  useFrame(state=>{
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y -= 0.01;
  })
  return(
  <mesh ref ={ref} {...props}>
  
  <boxBufferGeometry/>
  <meshBasicMaterial color="blue"/>
  </mesh>
  )
}


const MilkBox = (props, texture)=>{
  
  return(
  <mesh scale={[0.7,1.2,0.7]} {...props}>
  
  <boxBufferGeometry/>
  <meshBasicMaterial   map={texture} />
  </mesh>
  )
}

const CerealBox = (props, texture)=>{
  
  return(
  <mesh scale={[2,1.2,0.7]} {...props}>
  
  <boxBufferGeometry/>
  <meshBasicMaterial   map={texture} />
  </mesh>
  )
}
const Floor = props =>{
  const colorMap = useLoader(THREE.TextureLoader,'/Tiles107_1K_Color.jpg');
  const displacementMap = useLoader(THREE.TextureLoader,'/Tiles107_1K_Displacement.jpg');
  const normalMap = useLoader(THREE.TextureLoader,'/Tiles107_1K_NormalGL.jpg');
  const roughnessMap = useLoader(THREE.TextureLoader,'/Tiles107_1K_Roughness.jpg');
  const aoMap = useLoader(THREE.TextureLoader,'/Tiles107_1K_AmbientOcclusion.jpg');
 
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(5, 5);
  colorMap.anisotropy = 16;

  
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
  displacementMap.repeat.set(5, 5);
  displacementMap.anisotropy = 16;

  
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(5, 5);
  normalMap.anisotropy = 16;

  
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(5, 5);
  roughnessMap.anisotropy = 16;
  
  aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping;
  aoMap.repeat.set(5, 5);
  aoMap.anisotropy = 16;


  return(
    <mesh rotation={[(-Math.PI/2),0,0]} scale={[40,40,40]}>
      <planeGeometry />
      <meshBasicMaterial 
      map={colorMap} 
      displacementMap={displacementMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={aoMap} 
      displacementScale={0.2}/>
    </mesh>
  )
}
function VirtualScreen() {
  
  const dispatch = useDispatch();

  const getProducts = useSelector((state)=> state.getProducts);
  const {products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  },[dispatch]);
  
  
  products.map( (product)=>  (product.productType === "Dairy, Milk" ?
   <MilkBox position={[5,1,5]}/>:
   <Box  position={[-5,1,-5]} />) )

return (
    <div className='virtualscreen' >
   <Canvas 
   camera ={{position:[-10,4,-10]}}
   >
     <directionalLight/>
      <ambientLight intensity = {0.5} />
    {/* < CameraControls />*/} 
   

   <Box position= {[-1,1,2]}/>
   <Controls />
   <Suspense fallback={null}>
   <Floor/>
   </Suspense>
   <axesHelper args={[2 ]}/>
   </Canvas>
   </div>
  );
}

export default VirtualScreen;