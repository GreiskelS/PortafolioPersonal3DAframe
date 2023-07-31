<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\WebProyectRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WebProyectRepository::class)]
#[ApiResource]
class WebProyect
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $The_Proyect = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\Column(length: 255)]
    private ?string $Description = null;

    #[ORM\Column(length: 255)]
    private ?string $Type = null;

    #[ORM\Column(length: 255)]
    private ?string $Git = null;

    #[ORM\Column(length: 255)]
    private ?string $Image = null;

    #[ORM\Column(length: 255)]
    private ?string $Subtitle = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTheProyect(): ?string
    {
        return $this->The_Proyect;
    }

    public function setTheProyect(string $The_Proyect): static
    {
        $this->The_Proyect = $The_Proyect;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): static
    {
        $this->Title = $Title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): static
    {
        $this->Description = $Description;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): static
    {
        $this->Type = $Type;

        return $this;
    }

    public function getGit(): ?string
    {
        return $this->Git;
    }

    public function setGit(string $Git): static
    {
        $this->Git = $Git;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->Image;
    }

    public function setImage(string $Image): static
    {
        $this->Image = $Image;

        return $this;
    }

    public function getSubtitle(): ?string
    {
        return $this->Subtitle;
    }

    public function setSubtitle(string $Subtitle): static
    {
        $this->Subtitle = $Subtitle;

        return $this;
    }
}
