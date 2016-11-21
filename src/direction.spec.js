import {Direction} from './direction';
import '../tests/pollyfills.js'

describe('Direction', () => {

    describe('when checking valid direction', () => {

        it('returns true when NORTH', function(){
            let direction = new Direction();
            let result = direction.isValidDirection('NORTH')

            expect(result).toBe(true);
        });

        it('returns true when EAST', function(){
            let direction = new Direction();
            let result = direction.isValidDirection('EAST')

            expect(result).toBe(true);
        });

        it('returns true when SOUTH', function(){
            let direction = new Direction();
            let result = direction.isValidDirection('SOUTH')

            expect(result).toBe(true);
        });

        it('returns true when WEST', function(){
            let direction = new Direction();
            let result = direction.isValidDirection('WEST')

            expect(result).toBe(true);
        });

        it('returns false not a valid direction', function(){
            let direction = new Direction();
            let result = direction.isValidDirection('TEST')

            expect(result).toBe(false);
        });

    });

    describe('when getting next left direction', () => {

        it('returns WEST when current direction is NORTH', function(){

            let direction = new Direction();
            let result = direction.getNextLeftDirection('NORTH')

            expect(result).toBe('WEST');
        });
        it('returns SOUTH when current direction is WEST', function(){

            let direction = new Direction();
            let result = direction.getNextLeftDirection('WEST')

            expect(result).toBe('SOUTH');
        });
        it('returns EAST when current direction is SOUTH', function(){

            let direction = new Direction();
            let result = direction.getNextLeftDirection('SOUTH')

            expect(result).toBe('EAST');
        });
        it('returns NORTH when current direction is EAST', function(){

            let direction = new Direction();
            let result = direction.getNextLeftDirection('EAST')

            expect(result).toBe('NORTH');
        });
    });

    describe('when getting next right direction', () => {

        it('returns EAST when current direction is NORTH', function(){

            let direction = new Direction();
            let result = direction.getNextRightDirection('NORTH')

            expect(result).toBe('EAST');
        });
        it('returns SOUTH when current direction is EAST', function(){

            let direction = new Direction();
            let result = direction.getNextRightDirection('EAST')

            expect(result).toBe('SOUTH');
        });
        it('returns WEST when current direction is SOUTH', function(){

            let direction = new Direction();
            let result = direction.getNextRightDirection('SOUTH')

            expect(result).toBe('WEST');
        });
        it('returns NORTH when current direction is WEST', function(){

            let direction = new Direction();
            let result = direction.getNextRightDirection('WEST')

            expect(result).toBe('NORTH');
        });
    });    
});