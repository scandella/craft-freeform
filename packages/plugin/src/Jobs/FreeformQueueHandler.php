<?php
/**
 * Freeform for Craft CMS.
 *
 * @author        Solspace, Inc.
 * @copyright     Copyright (c) 2008-2024, Solspace, Inc.
 *
 * @see           https://docs.solspace.com/craft/freeform
 *
 * @license       https://docs.solspace.com/license-agreement
 */

namespace Solspace\Freeform\Jobs;

use Solspace\Freeform\Services\SettingsService;

class FreeformQueueHandler
{
    public function __construct(
        private SettingsService $settingsService
    ) {}

    public function executeNotificationJob(NotificationJobInterface $job): void
    {
        $queue = \Craft::$app->getQueue();

        if ($this->settingsService->isNotificationQueueEnabled()) {
            $queue->push($job);
        } else {
            $job->execute($queue);
        }
    }

    public function executeIntegrationJob(IntegrationJobInterface $job): void
    {
        $queue = \Craft::$app->getQueue();

        if ($this->settingsService->isIntegrationQueueEnabled()) {
            $queue->push($job);
        } else {
            $job->execute($queue);
        }
    }
}