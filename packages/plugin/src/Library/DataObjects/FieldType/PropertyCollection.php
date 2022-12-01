<?php

namespace Solspace\Freeform\Library\DataObjects\FieldType;

class PropertyCollection implements \IteratorAggregate, \JsonSerializable
{
    /** @var Property[] */
    private array $properties = [];

    public function add(Property ...$properties): self
    {
        foreach ($properties as $property) {
            $this->properties[] = $property;
        }

        return $this;
    }

    public function getNextOrder(): int
    {
        if (empty($this->properties)) {
            return 1;
        }

        return max(
            0,
            ...array_map(fn ($prop) => $prop->order ?? 0, $this->properties)
        ) + 1;
    }

    public function getProperties(): array
    {
        return $this->properties;
    }

    /**
     * @return \ArrayIterator|Property[]
     */
    public function getIterator(): \ArrayIterator
    {
        return new \ArrayIterator($this->properties);
    }

    public function jsonSerialize()
    {
        return $this->properties;
    }
}