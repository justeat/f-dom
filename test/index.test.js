import dom from '../src/index';

const setupDOM = () => document.body.innerHTML = 
	`<div class="test" id="parent1" custom="custom1">
	  <div class="test" id="child1"></div>
	  <div class="test1" id="child2"></div>
	<div class="test" id="child3"></div>
	</div>
	<div class="test" id="parent2" custom="custom1"></div>`;

describe('first', () => {
    it('returns first element by class name', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.first('.test');
        
        // Assert
        expect(result.id).toBe('parent1');
    });
	
    it('returns first element by id', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.first('#child2');
        
        // Assert
        expect(result.id).toBe('child2');
    });
	
    it('returns first child element when parent selector specified', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.first('.test', '#parent1');

        // Assert
        expect(result.id).toBe('child1');
    });
});

describe('all', () => {
    it('returns correct number of elements by class name', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.all('.test');
        
        // Assert
        expect(result.length).toBe(4);
    });
	
    it('returns collection with single item by class name', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.all('.test1');
        
        // Assert
        expect(result.length).toBe(1);
	    expect(result[0].id).toBe('child2');
    });
	
    it('returns collection with single item by id', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.all('#parent2');
        
        // Assert
        expect(result.length).toBe(1);
        expect(result[0].id).toBe('parent2');
    });
	
    it('returns collection of elements by custom attribute', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.all('[custom]');

        // Assert
        expect(result.length).toBe(2);
        expect(result[0].id).toBe('parent1');
        expect(result[1].id).toBe('parent2');
    });
	
    it('returns collection of child elements when parent selector specified', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.all('.test', '#parent1');

        // Assert
        expect(result.length).toBe(2);
        expect(result[0].id).toBe('child1');
        expect(result[1].id).toBe('child3');
    });
});

describe('exists', () => {
    it('returns true if element exists by class name', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('.test');
        
        // Assert
        expect(result).toBe(true);
    });
	
    it('returns true if element exists by id', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('#child2');
        
        // Assert
        expect(result).toBe(true);
    });
	
    it('returns false if element doesn`t exist by class name', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('.test2');
        
        // Assert
        expect(result).toBe(false);
    });
	
    it('returns false if element doesn`t exist by id', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('#parent3');
        
        // Assert
        expect(result).toBe(false);
    });
	
    it('returns true if element exists when parent selector specified', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('.test1', '#parent1');

        // Assert
        expect(result).toBe(true);
    });
	
    it('returns false if element doesn`t exist when parent selector specified', () => {
        // Arrange
        setupDOM();

        // Act
        const result = dom.exists('.test1', '#parent2');

        // Assert
        expect(result).toBe(false);
    });
});