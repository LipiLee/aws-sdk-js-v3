import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMissionProfileCommand,
  serializeAws_restJson1CreateMissionProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateMissionProfileCommandInput extends CreateMissionProfileRequest {}
export interface CreateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * <p>Creates a mission profile.</p>
 *          <p>
 *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
 *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 */
export class CreateMissionProfileCommand extends $Command<
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMissionProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateMissionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMissionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MissionProfileIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMissionProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMissionProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMissionProfileCommandOutput> {
    return deserializeAws_restJson1CreateMissionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
