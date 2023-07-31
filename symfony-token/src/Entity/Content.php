<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ContentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContentRepository::class)]
#[ApiResource]
class Content
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Name_proyect = null;

    #[ORM\Column(length: 255)]
    private ?string $Description = null;

    #[ORM\Column(length: 255)]
    private ?string $Proyect_type = null;

    #[ORM\Column(length: 255)]
    private ?string $Git = null;

    #[ORM\Column(length: 255)]
    private ?string $Image_proyect = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $Subtitle = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameProyect(): ?string
    {
        return $this->Name_proyect;
    }

    public function setNameProyect(string $Name_proyect): static
    {
        $this->Name_proyect = $Name_proyect;

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

    public function getProyectType(): ?string
    {
        return $this->Proyect_type;
    }

    public function setProyectType(string $Proyect_type): static
    {
        $this->Proyect_type = $Proyect_type;

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

    public function getImageProyect(): ?string
    {
        return $this->Image_proyect;
    }

    public function setImageProyect(string $Image_proyect): static
    {
        $this->Image_proyect = $Image_proyect;

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

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

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
