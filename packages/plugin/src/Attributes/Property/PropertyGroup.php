<?php

namespace Solspace\Freeform\Attributes\Property;

#[\Attribute(\Attribute::TARGET_PROPERTY)]
class PropertyGroup
{
    public function __construct(
        public string $handle,
        public ?string $label = null,
        public ?string $instructions = null,
        public ?int $order = null,
    ) {
    }
}