<?php

namespace Solspace\Freeform\Attributes\Field;

use Attribute;

#[\Attribute(\Attribute::TARGET_PROPERTY)]
class Section
{
    public function __construct(
        public ?string $handle,
        public ?string $label = null,
        public ?int $order = 100,
    ) {
    }
}