package com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.controller;

import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.dto.VideoPlayerHistoricalDto;
import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.entity.VideoPlayerHistoricalEntity;
import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.service.VideoPlayerHistoricalService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Slf4j
@CrossOrigin(allowedHeaders = "Content-type")
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/video-players-historical")
@PreAuthorize("isAuthenticated()")
@SecurityRequirement(name = "bearerAuth")
public class VideoPlayerHistoricalController {
    private final VideoPlayerHistoricalService service;
    private final ModelMapper mapper;
    // LOGGER FROM SLF4j
    private static final Logger LOGGER = LoggerFactory.getLogger(VideoPlayerHistoricalController.class);

    // LOGGER FROM LOMBOK SLF4j
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<VideoPlayerHistoricalDto> getVideoPlayersHistorical(Pageable pageable) {
        int toSkip = pageable.getPageSize() * pageable.getPageNumber();
        //SLF4J
        LOGGER.info("Using SLF4J: Getting video-player-historical list - getVideoPlayersHistorical()");
        //LOMBOK SLF4j
        log.info("Using SLF4J Lombok: Getting video player historical list - getVideoPlayersHistorical()");
        // Mapstruct is another dto mapper, but it's not straight forward
        var videoPlayerHistoricalList = StreamSupport
                .stream(service.findAllVideoPlayersHistorical().spliterator(), false)
                .skip(toSkip).limit(pageable.getPageSize())
                .collect(Collectors.toList());

        return videoPlayerHistoricalList
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public VideoPlayerHistoricalDto getVideoPlayerHistoricalById(@PathVariable("id") UUID id) {
        return convertToDto(service.findVideoPlayerHistoricalById(id));
    }

    @DeleteMapping("/{id}")
    public void deleteVideoPlayerHistoricalById(@PathVariable("id") UUID id) {
        service.removeVideoPlayerHistoricalById(id);
    }

    @PostMapping
    public VideoPlayerHistoricalDto postVideoPlayerHistorical(@Valid @RequestBody VideoPlayerHistoricalDto videoPlayerHistoricalDto) {
        var entity = convertToEntity(videoPlayerHistoricalDto);
        var videoPlayerHistorical = service.addVideoPlayerHistorical(entity);

        return convertToDto(videoPlayerHistorical);
    }

    @PutMapping("/{id}")
    public void putVideoPlayerHistorical(
            @PathVariable("id") UUID id,
            @Valid @RequestBody VideoPlayerHistoricalDto videoPlayerHistoricalDto
    ) {
        if (!id.equals(videoPlayerHistoricalDto.getId())) throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "id does not match"
        );

        var videoPlayerHistoricalEntity = convertToEntity(videoPlayerHistoricalDto);
        service.updateVideoPlayerHistorical(id, videoPlayerHistoricalEntity);
    }

    private VideoPlayerHistoricalDto convertToDto(VideoPlayerHistoricalEntity entity) {
        return mapper.map(entity, VideoPlayerHistoricalDto.class);
    }

    private VideoPlayerHistoricalEntity convertToEntity(VideoPlayerHistoricalDto dto) {
        return mapper.map(dto, VideoPlayerHistoricalEntity.class);
    }

}
