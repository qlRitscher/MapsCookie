<?php declare(strict_types=1);

namespace MapsCookie\Service;

use Shopware\Storefront\Framework\Cookie\CookieProviderInterface;

class CustomCookieProvider implements CookieProviderInterface {

    private CookieProviderInterface $originalService;

    public function __construct(CookieProviderInterface $service)
    {
        $this->originalService = $service;
    }

    private const singleCookie = [
        'snippet_name' => 'Google Maps',
        'snippet_description' => 'Sie erlauben das Laden von Daten von Google Maps. Dadurch werden eventuell persönliche Daten von Ihnen an Google übertragen.',
        'cookie' => 'maps-cookie',
        'value' => '1',
        'expiration' => '7'
    ];

    public function getCookieGroups(): array
    {
        return array_merge(
            $this->originalService->getCookieGroups(),
            [
                self::singleCookie
            ]
        );
    }
}