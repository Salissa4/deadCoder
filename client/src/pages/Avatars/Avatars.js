import React from 'react'
import './Avatars.css'
import { Avatar, IconButton } from '@mui/material'

import anotherAnt from '../../assets/Avatars/Another_Ant.png'
import anotherBird from'../../assets/Avatars/Another_Bird.png'
import anotherBug from'../../assets/Avatars/Another_Bug.png'
import anotherDuck from'../../assets/Avatars/Another_Duck.png'
import anotherFish from'../../assets/Avatars/Another_Fish.png'
import anotherTurtle from'../../assets/Avatars/Another_Turtle.png'
import Ant from'../../assets/Avatars/Ant.png'
import Bat from'../../assets/Avatars/Bat.png'
import Bear from'../../assets/Avatars/Bear.png'
import Bee from'../../assets/Avatars/Bee.png'
import Beetle from'../../assets/Avatars/Beetle.png'
import Bird from'../../assets/Avatars/Bird.png'
import Brontosaurus from'../../assets/Avatars/Brontosaurus.png'
import Buck from'../../assets/Avatars/Buck.png'
import Bug from'../../assets/Avatars/Bug.png'
import Bull from'../../assets/Avatars/Bull.png'
import Butterfly from'../../assets/Avatars/Butterfly.png'
import Camel from'../../assets/Avatars/Camel.png'
import Chicken from'../../assets/Avatars/Chicken.png'
import Chimpanzee from'../../assets/Avatars/Chimpanzee.png'
import Cockroach from'../../assets/Avatars/Cockroach.png'
import Cow from'../../assets/Avatars/Cow.png'
import Crab from'../../assets/Avatars/Crab.png'
import Dog from'../../assets/Avatars/Dog.png'
import Dolphin from'../../assets/Avatars/Dolphin.png'
import Donkey from'../../assets/Avatars/Donkey.png'
import Dragon from'../../assets/Avatars/Dragon.png'
import Dragonfly from'../../assets/Avatars/Dragonfly.png'
import Duck from'../../assets/Avatars/Duck.png'
import Elephant from'../../assets/Avatars/Elephant.png'
import Falcon from'../../assets/Avatars/Falcon.png'
import fishBones from'../../assets/Avatars/Fish bones.png'
import Fish from'../../assets/Avatars/Fish.png'
import Fly from'../../assets/Avatars/Fly.png'
import Fox from'../../assets/Avatars/Fox.png'
import Frog from'../../assets/Avatars/Frog.png'
import Gator from'../../assets/Avatars/Gator.png'
import Girraffe from'../../assets/Avatars/Girraffe.png'
import Goat from'../../assets/Avatars/Goat.png'
import Grasshopper from'../../assets/Avatars/Grasshopper.png'
import Hedgehog from'../../assets/Avatars/Hedgehog.png'
import Hippo from'../../assets/Avatars/Hippo.png'
import Horse from'../../assets/Avatars/Horse.png'
import Kangaroo from'../../assets/Avatars/Kangaroo.png'
import Lemur from'../../assets/Avatars/Lemur.png'
import Lion from'../../assets/Avatars/Lion.png'
import Lioness from'../../assets/Avatars/Lioness.png'
import Lizard from'../../assets/Avatars/Lizard.png'
import Lobster from'../../assets/Avatars/Lobster.png'
import longLeggedBird from'../../assets/Avatars/Long Legged Bird.png'
import Macaw from'../../assets/Avatars/Macaw.png'
import maleChicken from'../../assets/Avatars/Male Chicken.png'
import Monkey from'../../assets/Avatars/Monkey.png'
import Mouse from'../../assets/Avatars/Mouse.png'
import Octopus from'../../assets/Avatars/Octopus.png'
import Orca from'../../assets/Avatars/Orca.png'
import Ostrich from'../../assets/Avatars/Ostrich.png'
import Otter from'../../assets/Avatars/Otter.png'
import Owl from'../../assets/Avatars/Owl.png'
import Panda from'../../assets/Avatars/Panda Bear.png'
import Peacock from'../../assets/Avatars/Peacock.png'
import Pelican from'../../assets/Avatars/Pelican.png'
import Penguin from'../../assets/Avatars/Penguin.png'
import Pig from'../../assets/Avatars/Pig.png'
import Rabbit from'../../assets/Avatars/Rabbit.png'
import Racoon from'../../assets/Avatars/Racoon.png'
import Rhino from'../../assets/Avatars/Rhino.png'
import Rhinoceros from'../../assets/Avatars/Rhinoceros.png'
import sausageDog from'../../assets/Avatars/Sausage Dog.png'
import Seal from'../../assets/Avatars/Seal.png'
import Shark from'../../assets/Avatars/Shark.png'
import Sheep from'../../assets/Avatars/Sheep.png'
import Snail from'../../assets/Avatars/Snail.png'
import Snake from'../../assets/Avatars/Snake.png'
import Spider from'../../assets/Avatars/Spider.png'
import Squirrel from'../../assets/Avatars/Squirrel.png'
import Starfish from'../../assets/Avatars/Starfish.png'
import TRex from'../../assets/Avatars/TRex.png'
import Turkey from'../../assets/Avatars/Turkey.png'
import Turtle from'../../assets/Avatars/Turtle.png'
import Unicorn from'../../assets/Avatars/Unicorn.png'
import Whale from'../../assets/Avatars/Whale.png'
import Wolf from'../../assets/Avatars/Wolf.png'
import Zebra from'../../assets/Avatars/Zebra.png'

export default function Avatars () {
    return (
        <div>
            <div className='avatarHeader'>
            CHOOSE YOUR AVATAR
            </div>
            <div className='Avatars'>
            <IconButton>
            <Avatar alt='Horse Avatar' src={Horse} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Ant Avatar' src={anotherAnt} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bird Avatar' src={anotherBird} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bug Avatar' src={anotherBug} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Duck Avatar' src={anotherDuck} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Fish Avatar' src={anotherFish} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Turle Avatar' src={anotherTurtle} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Ant Avatar' src={Ant} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bat Avatar' src={Bat} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bear Avatar' src={Bear} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bee Avatar' src={Bee} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Beetle Avatar' src={Beetle} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bird Avatar' src={Bird} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Brontosaurus Avatar' src={Brontosaurus} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Buck Avatar' src={Buck} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bug Avatar' src={Bug} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bull Avatar' src={Bull} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Butterfly Avatar' src={Butterfly} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Camel Avatar' src={Camel} sx={{width:50, height: 50}}/>
            </IconButton>
            <div>
            <IconButton>
            <Avatar alt='Chicken Avatar' src={Chicken} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Chimpanzee Avatar' src={Chimpanzee} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Cockroach Avatar' src={Cockroach} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Cow Avatar' src={Cow} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Crab Avatar' src={Crab} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Dog Avatar' src={Dog} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Dolphin Avatar' src={Dolphin} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Donkey Avatar' src={Donkey} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Dragon Avatar' src={Dragon} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Dragonfly Avatar' src={Dragonfly} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Duck Avatar' src={Duck} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Elephant Avatar' src={Elephant} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Falcon Avatar' src={Falcon} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='fishBones Avatar' src={fishBones} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Fish Avatar' src={Fish} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Fly Avatar' src={Fly} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Fish Avatar' src={Fox} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Frog Avatar' src={Frog} sx={{width:50, height: 50}}/>
            </IconButton>
            </div>
            <IconButton>
            <Avatar alt='Gator Avatar' src={Gator} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Girraffe Avatar' src={Girraffe} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Goat Avatar' src={Goat} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Grasshopper Avatar' src={Grasshopper} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Hedgehog Avatar' src={Hedgehog} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Hippo Avatar' src={Hippo} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Horse Avatar' src={Horse} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Kangaroo Avatar' src={Kangaroo} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Lemur Avatar' src={Lemur} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Lion Avatar' src={Lion} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Lioness Avatar' src={Lioness} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Lizard Avatar' src={Lizard} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Lobster Avatar' src={Lobster} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Bird Avatar' src={longLeggedBird} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Macaw Avatar' src={Macaw} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Male Chicken Avatar' src={maleChicken} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Monkey Avatar' src={Monkey} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Mouse Avatar' src={Mouse} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Octopus Avatar' src={Octopus} sx={{width:50, height: 50}}/>
            </IconButton>
            <div>
            <IconButton>
            <Avatar alt='Orca Avatar' src={Orca} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Ostrich Avatar' src={Ostrich} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Otter Avatar' src={Otter} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Owl Avatar' src={Owl} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Panda Avatar' src={Panda} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Peacock Avatar' src={Peacock} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Pelican Avatar' src={Pelican} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Penguin Avatar' src={Penguin} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Pig Avatar' src={Pig} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Rabbit Avatar' src={Rabbit} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Racoon Avatar' src={Racoon} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Rhino Avatar' src={Rhino} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Rhinoceros Avatar' src={Rhinoceros} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Dog Avatar' src={sausageDog} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Seal Avatar' src={Seal} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Shark Avatar' src={Shark} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Sheep Avatar' src={Sheep} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Snail Avatar' src={Snail} sx={{width:50, height: 50}}/>
            </IconButton>
            </div>
            <IconButton>
            <Avatar alt='Snake Avatar' src={Snake} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Spider Avatar' src={Spider} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Squirrel Avatar' src={Squirrel} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Starfish Avatar' src={Starfish} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='TRex Avatar' src={TRex} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Turkey Avatar' src={Turkey} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Turtle Avatar' src={Turtle} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Unicorn Avatar' src={Unicorn} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Whale Avatar' src={Whale} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Wolf Avatar' src={Wolf} sx={{width:50, height: 50}}/>
            </IconButton>
            <IconButton>
            <Avatar alt='Zebra Avatar' src={Zebra} sx={{width:50, height: 50}}/>
            </IconButton>
            </div>
        </div>
    )
}